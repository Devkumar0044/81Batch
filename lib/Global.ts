// TO provide test data and objects/elements for whole application
import {Page} from "@playwright/test"
 export class Global{
     constructor(public page:Page){

     }
    // +++++++++++++++++Test Data++++++++++++++=== 
      public  url:string= "https://sureshitacademy.in/hrms/login.php"
      public username:string= "sureshit"
      public password:string="sureshit"
      public empfirstname:string="sureshit"
      public emplastname:string="Academy"
      public  editEmpfirstname:string="SureshHR"
      public editEmplastname:string="Academyit"
      public deleteEmpfirstname:string="SureshHR"
      //public deleteEmplastname:string="Academyit"
      //public dropdown_EmpName:string="Emp.First Name"

      //+++++++++++++++++++++++Objects/Elements+++++++++++++++
       public textbox_loginname :string= "//input[@name='txtUserName']"
        public textbox_password :string= "//input[@name='txtPassword']"
         public button_login :string="//input[@name='Submit']"
         public button_logout :string="//a[text()='Logout']"
         public frame_empInfo :string="//iframe[@id='rightMenu']"
         public button_add :string="//input[@value='Add']"
         public textbox_empfirstname :string="//input[@name='txtEmpFirstName']"
         public textbox_emplastname :string="//input[@name='txtEmpLastName']"
         public button_save :string="//input[@id='btnEdit']"
         public frame_editEmpInfo :string="//iframe[@id='rightMenu']"
         public button_edit :string="//input[@id='btnEditPers']"
         public button_editSave :string="//input[@id= 'btnEditPers']"
         public textbox_editEmpfirstname :string="//input[@name='txtEmpFirstName']"
         public textbox_editEmplastname :string="//input[@name='txtEmpLastName']"
         public button_delete :string="//input[@value='Delete']"
         public  checkbox_delete :string="//input[@value='19928']"
         public select_Firstname :string="//select[@name='loc_code']"
         public surchEmpfirstname :string="//input[@name='loc_name']"
         //public surchEmplastname :string="//input[@name='loc_code']"
         public button_surch :string="//input[@value='Search']"

 }
