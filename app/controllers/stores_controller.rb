class StoresController < ApplicationController
  
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
  
end

#(U)pdate
def edit
  #we need to find store in DB to update
  # render update form
end

def update
 store = Store.find(set_store)
end

#(D)elete
def destroy
  @store.destroy
  redirect_to stores_path
end

private

def set_store
@store = Store.find(params[:id])
end

end

