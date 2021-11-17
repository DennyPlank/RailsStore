class StoresController < ActionController::Base

def home
render component: "Home"
end

def index
  # here we grab all cars
 
end

def show
  #find car and show it (1 car by id)

end

#(C)reate
def new
  # render new form
end

def create
  # create car(from from UI) to our db
end

#(U)pdate
def edit
  #we need to find car in DB to update
  # render update form
end

def update
   # find car to Update
  # update car(from from UI) to our db
end

#(D)elete
def destroy
  # find car to Delete
  # Delete
end

end

