
import{test} from "@playwright/test"
import { Genral } from "../lib/Genral"
test("@Regression_ TC_002 Add Employee",async({page})=>{ 
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
 