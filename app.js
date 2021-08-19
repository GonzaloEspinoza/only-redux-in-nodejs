const {createStore,compose, combineReducers} = require('redux');

// ::::::::: ACTIONS::::::::::::::::::::::::::
const BUY_POKEMON ='BUY_POKEMON';
const CHANGE_NAME = 'CHANGE_NAME';
const RETURN_POKEMON = 'RETURN_POKEMON';
const BUY_YOSHI =  'BUY_YOSHI';
const BUY_GAMES = 'BUY_GAMES';

const buy_pokemon =(buy)=>{
    return{
        type:BUY_POKEMON,
        payload:buy
    }
}

const change_name=(name)=>{
    return {
        type:CHANGE_NAME,
        payload:name
    }
}

const returnPokemon=(cant)=>{
    return{
        type:RETURN_POKEMON,
        payload:cant
    }
}

const buy_yoshi =(cant)=>{
    return{
        type:BUY_YOSHI,
        payload: cant
    }
}

const buy_games =(cant)=>{
    return{
        type:BUY_GAMES,
        payload: cant
    }
}

// :::::::::::: REDRUCER :::::::::::::::::
const default_games_state = {
    pekemon:10,
    yoshi:10
}

const default_user_data ={
    name:'name_defautl',
    lastName: 'lastName_default'
}

const pokmeon_reducer =(state = default_games_state, action)=>{
    switch(action.type){
        case BUY_POKEMON:
            return{
                    ...state,
                    pekemon: state.pekemon- action.payload
                }
        case RETURN_POKEMON:
            return{
                ...state,
                pekemon:state.pekemon + action.payload
            }     
        case BUY_YOSHI:
            return{
                ...state,
                yoshi:state.yoshi - action.payload
            }   
        default:
            return state;
    }
}

const register_reducer = (state=default_user_data, action) => {

    switch(action.type){
        case CHANGE_NAME:
            return {
                ...state,
                name:action.payload
            }
        default: return state;
    }
}

const defautl_games_reducer = {
    ps5: 30,
    switch: 30

}

const games_reducer =(state = defautl_games_reducer, action)=>{
    
    switch(action.type){
        case BUY_GAMES:
            return {
                ...state,
                ps5:state.ps5-action.payload
            }
        default:
            return state;
    }
}



// :::::::::::::::::: STORE :::::::::::::::::::
const stores=combineReducers({
    register_reducer,
    pokmeon_reducer,
    games_reducer,
})

const store =  createStore(stores);
console.log(store.getState())
store.subscribe(()=>{
    console.log('Cambio de estado :',store.getState())
})

// store.dispatch(buy_pokemon(2))
store.dispatch(buy_pokemon(4))

// store.dispatch(change_name('tobias miranda'))

store.dispatch(returnPokemon(1))

store.dispatch(buy_games(10))

