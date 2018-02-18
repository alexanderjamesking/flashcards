(ns flashcards.web-server
  (:require [yada.yada :refer [listener resource as-resource swaggered]]
            [yada.resources.classpath-resource :refer [new-classpath-resource]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js]]))

(defn not-found [_]
  {:status 404
   :body "Not found"})

(def api-routes
  ["/status" (as-resource "Ping OK!")])

(def routes
  ["/"
   [["" (resource
         {:methods {:get {:produces "text/html"
                          :response (fn [ctx]
                                      (html
                                       [:body
                                        [:h1 "Hello!"]
                                        [:div#app
                                         [:h2 "App in dev mode"]]
                                        (include-js "/public/cljs/dev/main.js")]))}}})]
    ["public" (new-classpath-resource "public")]
    ["about" (as-resource "About me...")]
    ["api" (swaggered api-routes
                      {:info {:title "API"
                              :version "1.0"
                              :description "My example API"}
                       :basePath "/api"})]]
   [true not-found]])

(defn start-server [port]
  (listener routes {:port port}))
