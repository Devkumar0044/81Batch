// TO provide actual automation scripts

import { test } from "@playwright/test"
import { Genral } from "../lib/Genral"


 test("@Smoke_TC_001 Login and Logout",async({page})=>{ 

     let genral = new Genral(page)
     await genral.openApplication()
     await genral.waitstmt()
     await genral.login()
     await genral.waitstmt()
     await genral.logout()
     await genral.waitstmt()
 })   

