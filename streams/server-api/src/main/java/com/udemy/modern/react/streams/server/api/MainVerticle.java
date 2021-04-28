package com.udemy.modern.react.streams.server.api;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.http.HttpMethod;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.CorsHandler;

/**
 * @author dbatista
 */
public class MainVerticle extends AbstractVerticle {

  @Override
  public void start(final Promise<Void> startPromise) {


    // Router to handle request
    final Router router = Router.router(super.vertx);
    // Enabling CORS
    router.route().handler(CorsHandler.create("*").allowedMethod(HttpMethod.GET)
      .allowedMethod(HttpMethod.POST));

    // Handling requests and calling the next handler




    vertx.createHttpServer().requestHandler(router).listen(3666, http -> {
      if (http.succeeded()) {
        startPromise.complete();
        System.out.println("HTTP server started on port 3666");
      } else {
        startPromise.fail(http.cause());
      }
    });
  }
}
