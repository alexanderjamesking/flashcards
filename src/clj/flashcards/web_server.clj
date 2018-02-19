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

(defn routes [app-js]
  ["/"
   [["" (resource
         {:methods {:get {:produces "text/html"
                          :response (fn [ctx]
                                      (html
                                       [:head
                                        [:title "My App"]]
                                       [:body
                                        [:div#app
                                         [:h2 "App to go here"]]
                                        (include-js app-js)]))}}})]
    ["public" (new-classpath-resource "public")]
    ["about" (as-resource "About me...")]
    ["api" (swaggered api-routes
                      {:info {:title "API"
                              :version "1.0"
                              :description "My example API"}
                       :basePath "/api"})]]
   [true not-found]])

(defn start-server [port app-js]
  (listener (routes app-js) {:port port}))
