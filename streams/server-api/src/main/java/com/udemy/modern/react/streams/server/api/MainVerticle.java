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


    // Router to handle request
    final Router router = Router.router(super.vertx);
    // Request body handling
    router.route().handler(BodyHandler.create());
    // Enabling CORS
    router.route().handler(CorsHandler.create("*").allowedMethod(HttpMethod.GET).allowedMethod(HttpMethod.POST));

    // Handling requests and calling the next handler
    router.get("/streams/greeting").handler(this::greetingHandle);

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
  public void stop() throws Exception {
    // TODO Auto-generated method stub
    this.mongo.close();
  }


  /**
   * @param ctx
   */
  private void greetingHandle(final RoutingContext ctx) {
    ctx.response()
      .setStatusCode(200)
      .putHeader("content-type", "application/json; charset=utf-8")
      .end(Json.encodePrettily(new JsonObject().put("message", "Hi React/Redux/Hook Master")));
  }
}
