import {test} from '@playwright/test';
import { Genral } from '../lib/Genral';

test.describe('Regression Test Suite', () => {

    test("TC_001 Login and Logout",async({page})=>{ 
    
         let genral = new Genral(page)
         await genral.openApplication()
         await genral.waitstmt()
         await genral.login()
         await genral.waitstmt()
         await genral.logout()
         await genral.waitstmt()
  
    })
    test("TC_002 Add Employee",async({page})=>{ 
    let genral = new Genral(page)
    await genral.openApplication()
    await genral.waitstmt()
    await genral.login()
    await genral.waitstmt()
    await genral.addEmployee()
    await genral.waitstmt()
    await genral.logout()
    await genral.waitstmt()     

    }) 
})