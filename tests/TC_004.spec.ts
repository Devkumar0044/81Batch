import{test} from "@playwright/test"
import { Genral } from "../lib/Genral"
import { Global } from "../lib/Global"

test("TC_004-Add Employee and Delete Employee",async({page})=>{

    const genral = new Genral(page)
    await genral.openApplication()
    await genral.waitstmt()
    await genral.login()
    await genral.waitstmt()
   // await genral.addEmployee()
   // await genral.waitstmt()
  //  await genral.deleteEmployee()
   // await genral.waitstmt()
    await genral.surchEmployee()
    await genral.waitstmt()
    await genral.checkEmployee()
    await genral.waitstmt()
       await genral.deleteEmployee()
    await genral.waitstmt()
    await genral.logout()
    await genral.waitstmt() 
})