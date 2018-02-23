(ns dev
  (:refer-clojure :exclude [test])
  (:require [clojure.repl :refer :all]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clojure.java.io :as io]
            [integrant.core :as ig]
            [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [flashcards.web-server :as web-server]
            [figwheel-sidecar.repl-api]))

(def config {:web-server {:port 3000
                          :app-js "/public/cljs/dev/main.js"}})

(integrant.repl/set-prep! (constantly config))

(defmethod ig/init-key :web-server [_ {:keys [port app-js]}]
  (web-server/start-server port app-js))

(defmethod ig/halt-key! :web-server [_ server]
  (let [close! (:close server)]
    (close!)))
