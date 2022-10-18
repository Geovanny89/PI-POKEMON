const initialState ={
    pokemons : [],
    allpokemons:[]
  
};

function rootReducer(state = initialState,action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'GET_POKEMONS' :
            return{
                ...state,
                pokemons: action.payload,
                allpokemons:action.payload
            }
            case 'FILTER_BY_FILTER' :
                const allpokemons = state.pokemons
                const pokemonsFiltered =action.payload === 'All' ? allpokemons :
                 allpokemons.filter(el =>el.types === action.payload )
                 console.log(allpokemons)
                return{
                ...state,
                    pokemons : pokemonsFiltered

                }
                case 'ORDER_BY_NAME':
                    let sortedArr=action.payload ==="asc" ?
                    state.pokemons.sort(function(a,b){
                        if(a.name>b.name){
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0 ;
                    }) :
                    // eslint-disable-next-line array-callback-return
                    state.pokemons.sort(function (a,b){
                        if (a.name> b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                       
                    })
                    return{
                        ...state,
                        pokemons: sortedArr
                    }
            case 'FILTER_CREATED':
                const createdFilter = action.payload === 'created' ?
                 state.allpokemons.filter(el => el.createdInDb) : 
                 state.allpokemons.filter(el=> !el.createdInDb)
                 console.log(createdFilter)
                return{
                    ...state,
                    allpokemons : createdFilter
                }
            default: 
            return state;
    }
}
export default rootReducer;