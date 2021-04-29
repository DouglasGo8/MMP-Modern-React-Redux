package com.udemy.modern.react.streams.server.api;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.CorsHandler;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @author dbatista
 */
@Slf4j
@NoArgsConstructor
public class MainVerticle extends AbstractVerticle {


  private MongoClient mongo;
  public static final String COLLECTION = "streams";

  @Override
  public void start(final Promise<Void> startPromise) {


    final var dbJson = new JsonObject().put("db_name", "admin")
      .put("username", "guest")
      .put("password", "welcome1")
      .put("connection_string", "mongodb://localhost:27017");


    mongo = MongoClient.createShared(super.vertx, dbJson);

    // Router to handle request
    final Router router = Router.router(super.vertx);

    // Enabling CORS
    router.route().handler(CorsHandler.create("*").allowedMethod(HttpMethod.GET)
      .allowedMethod(HttpMethod.POST)
      .allowedMethod(HttpMethod.PUT)
      .allowedMethod(HttpMethod.DELETE)
      .allowedHeader("Access-Control-Request-Method")
      .allowedHeader("Access-Control-Allow-Credentials")
      .allowedHeader("Access-Control-Allow-Origin")
      .allowedHeader("Access-Control-Allow-Headers")
      .allowedHeader("Content-Type"));
    // Request body handling

    router.route().handler(BodyHandler.create());

    // Handling requests and calling the next handler
    router.get("/streams/id/:id").handler(this::getOneStream);
    router.get("/streams/all").handler(this::getAllStreams);
    router.put("/streams/edit/:id").handler(this::updateOneStream);
    router.post("/streams/create").handler(this::addOneStream);
    router.delete("/streams/delete/:id").handler(this::deleteOneStream);

    vertx.createHttpServer().requestHandler(router).listen(3666, http -> {
      if (http.succeeded()) {
        startPromise.complete();
        log.info("HTTP server started on port 3666");
      } else {
        startPromise.fail(http.cause());
      }
    });
  }

  @Override
  public void stop() {
    // TODO Auto-generated method stub
    this.mongo.close();
  }


  /**
   * @param ctx Route Context
   */
  private void addOneStream(final RoutingContext ctx) {

    try {
      this.mongo.insert(COLLECTION, ctx.getBodyAsJson(), r -> {
        ctx.response()
          .putHeader("content-type", "application/json; charset=utf-8")
          .setStatusCode(201)
          .end(Json.encodePrettily(r.result()));
      });

    } catch (Exception ex) {
      ctx.response().putHeader("content-type", "application/json; charset=utf-8").setStatusCode(503)
        .end(Json.encodePrettily("Encoding/Parser Error ".concat(ex.toString())));
    }

  }

  /**
   * @param ctx Route Context
   */
  private void getAllStreams(final RoutingContext ctx) {
    try {
      // log.info("done 2");
      this.mongo.find(COLLECTION, new JsonObject(), res -> {
        //res.result().forEach(c -> log.info(c.toString()));
        ctx.response()
          .setStatusCode(200).putHeader("content-type", "application/json; charset=utf-8")
          .end(Json.encodePrettily(res.result()));
      });

    } catch (Exception ex) {
      ctx.response().putHeader("content-type", "application/json; charset=utf-8").setStatusCode(503)
        .end(Json.encodePrettily("Encoding/Parser Error ".concat(ex.toString())));
    }
  }

  /**
   * @param ctx Route Context
   */
  private void getOneStream(final RoutingContext ctx) {
    try {

      final var id = ctx.request().getParam("id");
      this.mongo.find(COLLECTION, new JsonObject().put("_id", id), res -> {
        ctx.response()
          .setStatusCode(200).putHeader("content-type", "application/json; charset=utf-8")
          .end(Json.encodePrettily(res.result()));
      });

    } catch (Exception ex) {
      ctx.response().putHeader("content-type", "application/json; charset=utf-8").setStatusCode(503)
        .end(Json.encodePrettily("Encoding/Parser Error ".concat(ex.toString())));
    }
  }


  /**
   * @param ctx Route Context
   */
  private void updateOneStream(final RoutingContext ctx) {
    try {

      final var id = ctx.request().getParam("id");
      final var json = ctx.getBodyAsJson();

      this.mongo.updateCollection(COLLECTION, new JsonObject().put("_id", id),
        new JsonObject().put("$set", json), res -> {
          ctx.response()
            .setStatusCode(200).putHeader("content-type", "application/json; charset=utf-8")
            .end(Json.encodePrettily("Update Successfully"));
        });

    } catch (Exception ex) {
      ctx.response().putHeader("content-type", "application/json; charset=utf-8").setStatusCode(503)
        .end(Json.encodePrettily("Encoding/Parser Error ".concat(ex.toString())));
    }
  }


  /**
   * @param ctx Route Context
   */
  private void deleteOneStream(final RoutingContext ctx) {
    try {
      final var id = ctx.request().getParam("id");

      this.mongo.findOneAndDelete(COLLECTION, new JsonObject().put("_id", id), res -> {
        ctx.response()
          .setStatusCode(200).putHeader("content-type", "application/json; charset=utf-8")
          .end(Json.encodePrettily("Delete Successfully"));
      });

    } catch (Exception ex) {
      ctx.response().putHeader("content-type", "application/json; charset=utf-8").setStatusCode(503)
        .end(Json.encodePrettily("Encoding/Parser Error ".concat(ex.toString())));
    }
  }
}
