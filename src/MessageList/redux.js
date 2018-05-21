const initialStateForMessages = {
    imBusy: false,
    messages: [],
    newMessage: {},
    error: '',
    imWithError: false
}

const TYPES = {
    INITIAL_PREFETCH_MESSAGES: 'INITIAL_PREFETCH_MESSAGES',
    FETCHED_MESSAGES_WITH_SUCCESS: 'FETCHED_MESSAGES_WITH_SUCCESS',
    FETCHED_MESSAGES_WITH_ERROR: 'FETCHED_MESSAGES_WITH_ERROR',

    ADD_MESSAGE: 'ADD_MESSAGE'
}

const ACTIONS = {
    initialGetMessages: () => {
        return {
            type: TYPES.INITIAL_PREFETCH_MESSAGES,
            data: {
                imBusy: true,
                messages:[],
                error:'',
                imWithError:false
            }
        }
    },
    handleMessagesWithSuccess: messages => {
        return {
            type: TYPES.FETCHED_MESSAGES_WITH_SUCCESS,
            data: {
                imBusy: false,
                messages
            }
        }
    },
    handleMessagesWithError: error => {
        return {
            type: TYPES.FETCHED_MESSAGES_WITH_ERROR,
            data: {
                imBusy: false,
                imWithError: true,
                error
            }
        }
    }
}

export default function reducer (state = initialStateForMessages, action) {

    console.log('something changed', action, state)

    let newState = {}
    switch (action.type) {
        case TYPES.INITIAL_PREFETCH_MESSAGES:
            newState = { ...state, ...action.data }
            break
        case TYPES.FETCHED_MESSAGES_WITH_SUCCESS:
            newState = { ...state, ...action.data }
            break
        case TYPES.FETCHED_MESSAGES_WITH_ERROR:
            newState = { ...state, ...action.data }

            break
        default:
            newState = { ...state }
            break
    }

    console.log('after changes',newState)

    return newState
}


export {
    TYPES,ACTIONS
}