(ns flashcards.system
  (:require [integrant.core :as ig]
            [flashcards.web-server :as web-server]))

(defmethod ig/init-key :web-server [_ {:keys [port app-js]}]
  (web-server/start-server port app-js))

(defmethod ig/halt-key! :web-server [_ server]
  (let [close! (:close server)]
    (close!)))
