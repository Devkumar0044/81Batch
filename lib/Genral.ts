import { Global } from "./Global";

// To provide all the re usable functions/methods for the whole application
 export class Genral extends Global{
    //******** Re-usable methods/ funciton 

      async openApplication(){

        await this.page.goto(this.url)
        console.log("Application is open")

      }
      async login(){
        await this.page.locator(this.textbox_loginname).fill(this.username)
        await this.page.locator(this.textbox_password).fill(this.password)
        await this.page.locator(this.button_login).click()
        console.log("Login is completed successfully")

      }
      async logout(){
       await this.page.locator(this.button_logout).click()
       console.log("Logout is completed successfully")
      }

      async addEmployee(){
        const frame = this.page.frameLocator(this.frame_empInfo)
        await frame.locator(this.button_add).click()
        await frame.locator(this.textbox_empfirstname).fill(this.empfirstname)
        await frame.locator(this.textbox_emplastname).fill(this.emplastname)
        await frame.locator(this.button_save).click()
        console.log("Employee is added successfully")
      }
       async waitstmt(){
        await this.page.waitForTimeout(3000)
        console.log("Wait statement is every 3")
 }
    async editEmployee(){
        const frame = this.page.frameLocator(this.frame_editEmpInfo)
        await frame.locator(this.button_edit).click()
        await frame.locator(this.textbox_editEmpfirstname).fill(this.editEmpfirstname)
        await frame.locator(this.textbox_editEmplastname).fill(this.editEmplastname)
        await frame.locator(this.button_editSave).click()
        console.log("Employee is edited successfully")
      }
    async deleteEmployee(){
        const frame = this.page.frameLocator(this.frame_editEmpInfo)
        await frame.locator(this.checkbox_delete).check()
        await frame.locator(this.button_delete).click()
        console.log("Employee is deleted successfully")
      }   
    async surchEmployee(){
        const frame = this.page.frameLocator(this.frame_editEmpInfo)
        await frame.locator(this.select_Firstname).selectOption({value:"1"})
        await frame.locator(this.surchEmpfirstname).fill(this.deleteEmpfirstname)
       // await frame.locator(this.surchEmplastname).fill(this.deleteEmplastname)
        await frame.locator(this.button_surch).click()
        console.log("Employee is searched successfully")
        
      }
      async checkEmployee(){
        const frame = this.page.frameLocator(this.frame_editEmpInfo)
        const empfirstname = await frame.locator(this.surchEmpfirstname).textContent()
        //const emplastname = await frame.locator(this.surchEmplastname).textContent()    
    }
  }
