import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, FILTER } from "./Const";

const initialState={
    Todos:[
            { 
                id:1, 
                description: "inserisci gli articoli determinativi convinienti",
                isDone:false,
                title:"Articoli",
            },
            {
                id:2,
                description:"completare con i preposizioni adeguati",
                isDone:false,
                title:"Preposizioni",
            },
            {
                id:3,
                description:"determinare con i sinonimi ed i contrari",
                isDone:false,
                title:"Lessico",
            },
    ],
    filterTodos: "no-filter",
};

const Reducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_TODO:
          return { ...state, Todos: [...state.Todos, action.payload] };
          case EDIT_TODO:
        return {
          ...state,
          Todos: state.Todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo,description:action.payload.description,title:action.payload.title }
              : todo
          ),
        }
        case DELETE_TODO:
        return {
          ...state,
          Todos: state.Todos.filter((todo) => todo.id !== action.payload),
        };
      case COMPLETE_TODO:
        return {
          ...state,
          Todos: state.Todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
          ),
        };
      case FILTER:
        return { ...state, filterTodos: action.payload };
        default:
            return state;
        }
}

export default Reducer
