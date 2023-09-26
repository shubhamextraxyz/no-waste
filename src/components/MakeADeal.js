import React from 'react'

export default function MakeADeal() {
  return (
    <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-6">
        <form>
        <h6>This section is only for restraunt and shop owners!</h6>
        <hr />
        <h4>Owner Details</h4>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="shubham"/>
            <label for="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingAddress" placeholder="name@example.com"/>
            <label for="floatingInput">Restraunt/ Shop Name</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingContact" placeholder="91234567890"/>
            <label for="floatingInput">Contact Number</label>
        </div>
        <hr />
        <h4>Food & Deal</h4>
        <h6>Food Quantity</h6>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingfoodItemVeg" placeholder="0"/>
                    <label for="floatingfoodItemVeg">Quantity [Veg food packets]</label>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingfoodItemNonVeg" placeholder="0"/>
                    <label for="floatingfoodItemNonVeg">Quantity [Non-Veg food packets]</label>
                </div>
                </div>
            </div>
        </div>
        <h6>   Food Price</h6>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingfoodItemVeg" placeholder="0"/>
                    <label for="floatingfoodItemVeg">Price in Rs [1 Veg food packet]</label>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingfoodItemNonVeg" placeholder="0"/>
                    <label for="floatingfoodItemNonVeg">Price in Rs [1 Non-Veg food packet]</label>
                </div>
                </div>
            </div>
        </div>
        <hr />
            <button className="btn custom-btn-color custom-left-margin-button1">Order Metrics</button>
            <button className="btn custom-btn-color custom-left-margin-button2">Make Order</button>
        </form>
        </div>
    </div>
    </div>
  )
}
