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
  store = Store.new(params.require(:store).permit(:name))
  if store.save
  redirect_to stores_path
  else 
    puts "Error in create_controller"
  end
end

#(U)pdate
def edit
  render component: 'editStore', props: {store: @store}
end

def update
 @store.update(params.require(:store).permit(:name))
 
 redirect_to stores_path
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

