module.exports = ({company,client, invoiceId, dueDate,items}) => {
const today = new Date();
let amount=0


return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
         .invoice-box {
         max-width: 800px;
         margin: auto;
         padding: 30px;
         border: 1px solid #eee;
         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
         font-size: 16px;
         line-height: 24px;
         font-family: 'Helvetica Neue', 'Helvetica';
         }
         .justify-center {
         text-align: center;
         }
         .justify-left{
           text-align: left;
         }
         .justify-right{
           text-align: right;
         }
         
         .bold{
           color:black;
           font-weight: 600;
         }
         .grey{
           color:#555555;
           font-weight:400;
         }
         .line{
           line-height: 10px;
         }
         table{
         width: 100%;
         line-height: inherit;
         text-align: left;
         }
         .mt{
            margin-top: 50px;
         }
        td{
           border-bottom: 1px solid #eee;
           border-right: 1px solid #eee;
         }
         th{
           border-bottom: 1px solid #eee;
           border-right: 1px solid #eee;
         }
         .none{
           border-right: none;
         }
         .nonebb{
            border-bottom:none
         }
        
      </style>
   </head>
   <body>
      <div class="invoice-box">
        <table>
           <tr>
           <td class="none nonebb justify-left"><h1>INVOICE</h1></td>
           <td class="none nonebb justify-right"><p class="grey">From | <span class="bold">${company}</span></p></td>
           </tr>
        </table>

        <table class="mt">
           <tr>
           <td class="none justify-left nonebb">
           <p class="grey">Invoice ID | <span class="bold">${invoiceId}</span></p>
           <p class="grey">Issue Date | <span class="bold"> ${`${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`}</span></p>
           <p class="grey">Due Date | <span class="bold">${dueDate}</span></p>
           </td>
           <td class="none justify-right nonebb">
              <p class="grey">Invoice For | <span class="bold">${client}</span></p>
           </td>
           </tr>
        </table>
        <table class="mt" >
           <thead>
              <tr>
                <th>Item Type</th>
                <th style="width:50%">Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th class="none">Amount</th>
              </tr>
           </thead>
           <tdata id="tdata">
           ${
            items.map((el)=>{
               amount=amount+Number(el.price)*Number(el.quantity);
               return (`<tr>
               <td>${el.service}</td>
               <td>${el.description}</td>
               <td>${el.quantity}</td>
               <td>${el.price}</td>
               <td class="none">${Number(el.price)*Number(el.quantity)}</td>
            </tr>`)
             })
          }
           </tdata>
        </table>
        <h4 class="justify-right">Amount Due  ${amount}</h4>
      </div>
   </body>
</html>


    `;
};