import {test} from "@playwright/test"
import {Genral} from "../lib/Genral"
import { Global } from "../lib/Global"

test("TC_003-Add Employee and Edit Employee",async({page})=>{

    const genral = new Genral(page)
    await genral.openApplication()
    await genral.waitstmt()
    await genral.login()
    await genral.waitstmt()
    await genral.addEmployee()
    await genral.waitstmt()
    await genral.editEmployee()
    await genral.waitstmt()
    await genral.logout()
    await genral.waitstmt() 

})