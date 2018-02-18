(ns flashcards.system
  (:require [integrant.core :as ig]
            [flashcards.web-server :as web-server]))

(defmethod ig/init-key :web-server [_ {:keys [port]}]
  (web-server/start-server port))

(defmethod ig/halt-key! :web-server [_ server]
  (let [close! (:close server)]
    (close!)))
