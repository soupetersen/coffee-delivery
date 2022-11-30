export enum ActionTypes {
    ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
    REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
    COMPLETE_CURRENT_ORDER = "COMPLETE_CURRENT_ORDER",
}

export function addNewCycleAction(newCycle: any) {
    return {
        type: ActionTypes.ADD_COFFEE_TO_CART,
        payload: {
            newCycle,
        },
    };
}

export function markCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    };
}

export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.COMPLETE_CURRENT_ORDER,
    };
}
