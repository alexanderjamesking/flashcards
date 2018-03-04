(ns flashcards.routes
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [flashcards.game :as game]
            [flashcards.content :as content]
            [flashcards.view.home :as home]
            [flashcards.view.play :as play]
            [flashcards.view.end :as end]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [clojure.set :refer [map-invert]]))


(def app-routes ["/" {"" :home
                      "play" :play
                      "end" :end}])

(def history
  (pushy/pushy (fn [response]
                 (println "this handler..." response))
               (partial bidi/match-route app-routes)))

(defn- parse-url [url]
  (bidi/match-route app-routes url))

(defn navigate-to [route]
  (rf/dispatch [:navigate-to route]))

(defn- dispatch-route [matched-route]
  (navigate-to (:handler matched-route)))

(rf/reg-event-db
 :navigate-to
 (fn [db [_ route]]
   (pushy/set-token! history (bidi/path-for app-routes route))
   (assoc db :route route)))

(rf/reg-sub
 :route
 (fn [db _]
   (or (:route db) :home)))


(defmulti render-view identity)

(defmethod render-view :home [] [home/view])

(defmethod render-view :end [] [end/view])

(defmethod render-view :play [] [play/view])

(defn render-app []
  [render-view @(rf/subscribe [:route])])

(pushy/start! (pushy/pushy dispatch-route parse-url))
