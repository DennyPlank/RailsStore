class StoresController < ActionController::Base
  before_action :set_store, only: [:show, :edit, :update, :destroy]
def home
render component: "Home"
end

def index
  render component: 'Stores', props: {stores: Store.all}
end

def show
  render component: 'Store', props: {store: @store}
end

#(C)reate
def new
 render component: 'newStore'
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

private

def set_store
@store = Store.find(params[:id])
end

end

