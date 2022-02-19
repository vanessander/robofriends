import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

const initialStateSearch = {
    searchField: '',
}

export function searchRobots(state=initialStateSearch, action={}) {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return {
                ...state,
                searchField: action.payload
            };

        default:
            return {
                ...state
            };
    }
}

const initialStateRequest = {
    isPending: false,
    error: false,
    robots: []
}

export function requestRobots(state=initialStateRequest, action={}) {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                error: false,
                isPending: true
            };
        
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                error: false,
                robots: action.payload
            };
        
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                error: true
            };
        
        default:
            return {
                ...state
            }
    }
}