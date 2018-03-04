(ns flashcards.main
  "Entrypoint for production Uberjar"
  (:require [integrant.core :as ig]
            [environ.core :refer [env]])
  (:gen-class))

(def port (if-let [p (env :port)]
            (Integer/parseInt p)
            3000))

(def config {:flashcards.web-server/server {:port port
                                            :app-js "/public/cljs/main.min.js"}})

(defn -main [& args]
  (ig/load-namespaces config)
  (let [system (ig/init config)]
    @(promise)))
