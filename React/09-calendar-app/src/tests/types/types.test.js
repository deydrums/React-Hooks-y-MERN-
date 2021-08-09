import { types } from "../../types/types"

describe('Pruebas en types', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(types).toEqual({
            uiOpenModal: '[ui] Open modal',
            uiCloseModal: '[ui] Close modal',
        
            eventStartAddNew: '[event] Start add new',
            eventAddnew: '[event] Add new',
            eventSetActive: '[event] Set active',
            eventUnsetActive: '[event] Unset active',
            eventUpdated: '[event] Event updated',
            eventDeleted: '[event] Event deleted',
            eventLoaded: '[event] Events loaded',
            eventLogout: '[event] Logout event',
        
        
            authChecking: '[auth] Cheking login state',
            authCheckingFinish: '[auth] Finish login checking',
            authStartLogin: '[auth] Start login',
            authLogin: '[auth] Login',
            authStartRegister: '[auth] Start Register',
            authStartTokenRenew: '[auth] Start token renew',
            authLogout: '[auth] Logout'
        })
        
    })
    
})
