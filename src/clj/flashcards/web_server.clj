(ns flashcards.web-server
  (:require [yada.yada :refer [listener resource as-resource swaggered]]))

(defn not-found [_]
  {:status 404
   :body "Not found"})

(def api-routes
  ["/status" (as-resource "Ping OK!")])

(def routes
  ["/"
   [["" (as-resource "Hello")]
    ["about" (as-resource "About me...")]
    ["api" (swaggered api-routes
                      {:info {:title "API"
                              :version "1.0"
                              :description "My example API"}
                       :basePath "/api"})]
    [true not-found]]])

(defn start-server [port]
  (listener routes {:port port}))
