(ns search-front.init
    (:require [search-front.core :as core]
              [search-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
