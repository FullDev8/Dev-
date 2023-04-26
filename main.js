
const { app, BrowserWindow, ipcMain, Notification, Menu } = require('electron');

//const server = require("./src");

//Menu.setApplicationMenu(false);
require('electron-reload')(__dirname);
const path = require('path');
const { PosPrinter } = require('electron-pos-printer');
let db = require('./database');

/*
//Require the renderer
const renderer = require('@futurelucas4502/light-electron-renderer');
const ejs = require('ejs');
// setup renderer
renderer.use(ejs, true, 'assets', 'views', ejs.renderFile);
*/

let win;
//let winlogin;

// Create Window
/* 
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'index.js')
    }
  })
  win.loadFile('login.html');
}
*/

  function loginWindow() {
    win = new BrowserWindow({
     width: 1200,
     height: 800,
     webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //preload:path.join(__dirname, 'login.js')
     }
   })
  
   win.loadFile('index.html');
  }
  
  app.whenReady().then(loginWindow)
  /*
  renderer.load(win, 'login', {
    appName: app.getName(),
    appVersion: app.getVersion(),
    chromeVersion: process.versions['chrome'],
    nodeVersion: process.versions['node'],
    electronVersion: process.versions['electron']
  })
   */

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loginWindow()
  }
})

// Log in
/*
ipcMain.handle('login', (event, obj) => {
  validatelogin(obj);
})

function validatelogin(obj) {
  const { email, password } = obj;
  const sql = "SELECT * FROM accounts WHERE username = ? AND password = ?";
   db.query(sql, [email, password], (error, results, fields) => {
     if(error){ 
      console.log(error);
     }
 
     if(results.length > 0){
        createWindow ()
        win.show()
        winlogin.close()
      } else {
        new Notification({
          title:"login",
          body: 'Email or Password is not correct'
        }).show();
      }
   });
 }
*/

/* -----------------------------------  Product ---------------------------- */
//              Product                 
// Get products
ipcMain.handle('get', () => {
  getProducts();
});

// Get products
ipcMain.handle('get_product_category', () => {
  getProductCategory();
});

// Get supplier name
ipcMain.handle('getsuppliername', () => {
  getSupplierName();
});

// Get products by category
ipcMain.handle('getprd', (event, categoryproduct) => {
  getProductByCategory(categoryproduct);
});

// Add product
ipcMain.handle('add', (event, obj) => {
  addProduct(obj);
});

// Add product category
ipcMain.handle('addCategory', (event, obj) => {
  addProductCategory(obj);
});

// View products
ipcMain.handle('get_view', (event, obj) => {
  viewproduct(obj);  
});

// Get products
ipcMain.handle('get_one', (event, obj) => {
  getproduct(obj);  
});

// Remove products
ipcMain.handle('remove_product', (event, obj) => {
  deleteproduct(obj);
});

// Remove product category
ipcMain.handle('remove_product_category', (event, obj) => {
  deleteproductcategory(obj);
});

// Update products
ipcMain.handle('update', (event, obj) => {
  updateproduct(obj);  
});

// Update product category
ipcMain.handle('updatecategory', (event, obj) => {
  updateproductcategory(obj);  
});

// Get total sales
ipcMain.handle('getTotalSales', (event, day) => {
  getTotalSales(day);  
});

// Get total stock in
ipcMain.handle('getTotalStockIn', () => {
  getTotalInStock();  
});

// Get total stock out
ipcMain.handle('getTotalStockOut', (event, day) => {
  getTotalStockOut(day);  
});

// Update in stock
ipcMain.handle('deductstockIn', (event, [params]) => {
  updateInStockProduct([params]);
});

// Product notification
ipcMain.handle('productNotify', () => {
  getProductNotify();
});

/*--------------------- FUNCTIONALITY -----------------*/
// CONTROLLER
// Get products function
function getProducts() {
  db.query('SELECT * FROM stocks', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('products', results);
  });
}

// Get products function
function getProductCategory() {
  db.query('SELECT * FROM category', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('productcategory', results);
  });
}

// Get supplier name function
function getSupplierName() {
  db.query('SELECT * FROM supplier', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('suppliername', results);
  });
}

// Get products function
function getProductByCategory(categoryproduct) {
  const sql = "SELECT * FROM stocks WHERE category = ?";
  db.query(sql, categoryproduct, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('productbycategory', results);
  });
}

// Add products function
function addProduct(obj) {
  const sql = "INSERT INTO stocks SET ?";  
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getProducts();
 });
}

// Add products function
function addProductCategory(obj) {
  const sql = "INSERT INTO category SET ?";  
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getProductCategory();
 });
}

// Delete product function
function deleteproduct(obj) {
  const { id }  = obj;
  const sql = "DELETE FROM stocks WHERE id = ?";
  db.query(sql, id, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getProducts();
  });
}

// Delete product category function
function deleteproductcategory(obj) {
  const { id }  = obj;
  const sql = "DELETE FROM category WHERE id = ?";
  db.query(sql, id, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getProductCategory();
  });
}

// View products
function viewproduct(obj) {
  let { id } = obj;
  let sql = "SELECT * FROM stocks WHERE id = ?"
  db.query(sql, id, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    console.log(results);
    win.webContents.send('product_view', results[0]);
  });
}

// Get products
function getproduct(obj) {
  let { id } = obj;
  let sql = "SELECT * FROM stocks WHERE id = ?"
  db.query(sql, id, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    console.log(results);
    win.webContents.send('product', results[0]);
  });
}

// Update function
function updateproduct(obj) {
   let { id, name, sizes, productprice, quantity, supplier, category } = obj;
   const sql = "UPDATE stocks SET name=?, sizes=?, productprice=?, quantity=?, supplier=?, category=? WHERE id=?";  
   db.query(sql, [name, sizes, productprice, quantity, supplier, category, id], (error, results, fields) => {
     if(error) {
        console.log(error);
     }
     getProducts();
   });
}

// Update function
function updateproductcategory(obj) {
  let { id, categoryproduct, description } = obj;
  const sql = "UPDATE category SET categoryproduct=?, description=? WHERE id=?";  
  db.query(sql, [categoryproduct, description, id], (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getProductCategory();
  });
}

// Update In Stock function
function updateInStockProduct([params]) {
  params.forEach(element => {
    const sql = "UPDATE stocks SET quantity = quantity - ? WHERE id = ?";
    db.query(sql, [element[4], element[0]], (error, results, fields) => {
      if(error) {
        console.log(error);
      }
    });
  });
}

// Get product running out
function getProductNotify() {
  db.query('SELECT * FROM stocks', (error, results, fields) => {
    if (error){
      console.log(error);
    } else {
      console.log(results)
    }
    win.webContents.send('productalert', results);
  });  
}

// ---------------------------------------- DASHBOARD -------------------------------------------
// Total Sales
function getTotalSales(day) {
  const sql = "SELECT IFNULL(SUM(cost), 0) AS total FROM transaction WHERE date = ?";
  db.query(sql, day, (error, results, fields) => {
    if (error){
      console.log(error);
    } else {
      console.log(results)
    }
    win.webContents.send('totalsales', results);
  });  
}

// Stocks Notification
// Stock in
function getTotalInStock() {
  db.query('SELECT IFNULL(SUM(quantity), 0) AS total FROM stocks', (error, results, fields) => {
    if (error){
      console.log(error);
    } else {
      console.log(results)
    }
    win.webContents.send('stockin', results);
  });  
}

// Stock out
function getTotalStockOut(day) {
  const sql = "SELECT IFNULL(SUM(quantity), 0) AS total FROM transaction WHERE date = ?";
  db.query(sql, day, (error, results, fields) => {
    if (error){
      console.log(error);
    } else {
      console.log(results)
    }
    win.webContents.send('stockout', results);
  });  
}


// ----------------------------------TRANSACTION------------------------------------ 
/* --------------------------------   ipcMain  ------------------------------ */
       
// Add transaction
ipcMain.handle('addTransac', (event, [params]) => {
  addTransaction([params]);
});

// Get transaction
ipcMain.handle('getTransac', () => {
  getTransaction();
});

// Get Recent transaction
ipcMain.handle('getproducttrend', (event, day) => {
  getProductTrend(day);
});

// Get Recent transaction
ipcMain.handle('getrecentTransaC', () => {
  getRecentTransaction();
});

// Remove products
ipcMain.handle('removeTransac', (event, obj) => {
  deletetransaction(obj);
});

// Clear All
ipcMain.handle('removeDate', (event, obj) => {
  cleartransaction(obj);
});

// Get products and append
ipcMain.handle('getproduct', (event, obj) => {
  getproducttotransac(obj);  
});

/* --------------------------------  Functionality  ------------------------------ */
// Add transaction
function addTransaction([params]) {
  const sql = "INSERT INTO transaction (productcode, name, size, price, quantity, time, date, cost) VALUES ?;";  
  db.query(sql, [params], (error, results, fields) => {
    if(error) {
       console.log(error);
    }
   getTransaction();
 });
}

// Get transaction function
function getTransaction() {
  db.query('SELECT * FROM transaction', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('transaction', results);
  });  
}

// Get product trend
function getProductTrend(day) {
  const sql = 'SELECT * FROM transaction WHERE date =? AND quantity >= 500';
  db.query(sql, day, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    console.log(results);
    win.webContents.send('producttrend', results);
  });
};

// Get recent transaction function
function getRecentTransaction() {
  db.query('SELECT * FROM transaction ORDER BY id DESC', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    console.log(results);
    win.webContents.send('recenttransaction', results);
  });  
}

// Delete transaction function
function deletetransaction(obj) {
  const { id }  = obj;
  const sql = "DELETE FROM transaction WHERE id = ?";
  db.query(sql, id, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getTransaction();
  });
}

// Clear transaction function
function cleartransaction(obj) {
  const sql = "DELETE FROM transaction WHERE date = ?";
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getTransaction();
  });
}

// Get products and append
function getproducttotransac(obj) {
  let { id } = obj;
  let sql = "SELECT * FROM stocks WHERE id = ?"
  db.query(sql, id, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    console.log(results);
    win.webContents.send('producttransac', results[0]);
  });
}

// ----------------------------------EMPLOYEE------------------------------------ 
// Add Employee List

// Get Employee 
ipcMain.handle('getemployeelist', () => {
  getEmployeeList();
});

// Add employee
ipcMain.handle('add_employee_list', (event, obj) => {
  addEmployee(obj);
});

// Remove Employee
ipcMain.handle('remove_employee_list', (event, obj) => {
  deleteemployee(obj);
});

// Add payroll process
ipcMain.handle('addpayroll', (event, obj) => {
  addpayroll(obj);
});

ipcMain.handle('getpayroll', () => {
  getpayroll();
});

// View employee
ipcMain.handle('get_viewemployee', (event, obj) => {
  viewemployee(obj);  
});

// View payslip
ipcMain.handle('get_view_payroll', (event, obj) => {
  viewpayroll(obj);  
});

// Remove payroll
ipcMain.handle('removepayroll', (event, obj) => {
  deletepayroll(obj);
});

// Get employee list function
function getEmployeeList() {
  db.query('SELECT * FROM employee_list', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('employeelist', results);
  });  
}

// Add employee function
function addEmployee(obj) {
  const sql = "INSERT INTO employee_list SET ?";  
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getEmployeeList();
 });
}

// Delete employee function
function deleteemployee(obj) {
  const { id }  = obj;
  const sql = "DELETE FROM employee_list WHERE employeeID = ?";
  db.query(sql, id, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getEmployeeList();
  });
}

// Add payroll function
function addpayroll(obj) {
  const sql = "INSERT INTO payroll SET ?";  
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getpayroll();
 });
}

// Get payroll
function getpayroll() {
  db.query('SELECT * FROM payroll', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('payroll', results);
  });  
}

// View employee
function viewemployee(obj) {
  let { id } = obj;
  let sql = "SELECT * FROM employee_list WHERE employeeID = ?";
  db.query(sql, id, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('employee_view', results[0]);
  });
}

// View payslip
function viewpayroll(obj) {
  let { id } = obj;
  let sql = "SELECT * FROM payroll WHERE employeeId = ?"
  db.query(sql, id, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    
    win.webContents.send('payslip_view', results[0]);
  });
}

// Delete product function
function deletepayroll(obj) {
  const { id }  = obj;
  const sql = "DELETE FROM payroll WHERE employeeId = ?";
  db.query(sql, id, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getpayroll();
  });
}

// ------------------------------------Supplier------------------------------------
// Get Supplier
ipcMain.handle('getsupplierlist', () => {
  getSupplierList();
});

// Add supplier
ipcMain.handle('add_supplier_list', (event, obj) => {
  addSupplier(obj);
});

// Get supplier list function
function getSupplierList() {
  db.query('SELECT * FROM supplier', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    win.webContents.send('supplierlist', results);
  });  
}

// Add supplier function
function addSupplier(obj) {
  const sql = "INSERT INTO supplier SET ?";  
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getSupplierList();
 });
}



// ---------------------------------Product Receipt-----------------------------
ipcMain.on('print', (event, data) => {
  const datA = JSON.parse(data);
  // Printer
  PosPrinter.print(datA, {
    silent: true,
    preview: true,
    margin: '0 0 0 0',
    landscape: false,
    pagesPerSheet: 1,
    timeOutPerLine: 400,
    copies: 1,
    width: '190px',
    pageSize: { height: 301000, width: 71000 }
  }).catch(error => console.log(error));
}) 