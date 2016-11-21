import { createStore } from 'redux'

let store = createStore(function() { return 'Hello Redux'})
var contents = document.getElementById('contents')
contents.innerHTML = store.getState().toString()

// redux ｎ createStoreという関数を使用してStoreを用意し、
// Storeから値を取得するとHello reduxという値を返却しています
