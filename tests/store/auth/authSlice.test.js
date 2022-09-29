import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authState';

describe('Pruebas en el authSlice', () => {
    
    test('debe de regresar el estado inicial', () => {

        expect( authSlice.getInitialState() ).toEqual( initialState );

    });

});
