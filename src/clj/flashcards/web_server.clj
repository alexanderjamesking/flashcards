(ns flashcards.web-server
  (:require [yada.yada :refer [listener resource as-resource swaggered]]
            [yada.resources.classpath-resource :refer [new-classpath-resource]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js include-css]]
            [integrant.core :as ig]))

(defn not-found [_]
  {:status 404
   :body "Not found"})

(def api-routes
  ["/"
   [["status" (as-resource "Ping OK!")]
    ["json" (resource
             {:produces "application/json"
              :methods {:get {:response (fn [_]
                                          {:hello "world"})}}})]
    ["transit" (resource
                {:produces "application/transit+json"
                 :methods {:get {:response (fn [_]
                                             {:hello "world"})}}})]]])

(defn index [app-js]
  (resource
   {:produces "text/html"
    :methods {:get {:response (fn [ctx]
                                (html
                                 [:head
                                  [:meta {:charset "utf-8"}]
                                  [:meta {:name "viewport"
                                          :content "width=device-width, initial-scale=1"}]
                                  [:title "My App"]
                                  (include-css "/public/css/bulma.min.css")
                                  (include-css "/public/css/app.css")]
                                 [:body
                                  [:div#app
                                   [:p {:class "loading"} "Loading"]]
                                  (include-js app-js)
                                  (include-js "https://use.fontawesome.com/releases/v5.0.0/js/all.js")]))}}}))

(defn routes [app-js]
  ["/"
   [["" (index app-js)]
    ["play" (index app-js)]
    ["end" (index app-js)]
    ["public" (new-classpath-resource "public")]
    ["api" (swaggered api-routes
                      {:info {:title "API"
                              :version "1.0"
                              :description "My example API"}
                       :basePath "/api"})]
    [true not-found]]])

(defn start-server [port app-js]
  (listener (routes app-js) {:port port}))

(defmethod ig/init-key ::server [_ {:keys [port app-js]}]
  (start-server port app-js))

(defmethod ig/halt-key! ::server [_ server]
  (let [close! (:close server)]
    (close!)))
