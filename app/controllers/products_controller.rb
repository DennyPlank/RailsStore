class ProductsController < ApplicationController
  before_action :set_store
  before_action :set_topic, only: [:show, :update, :destroy, :edit]

  
  def index
    render component: "Products", props: { product: @product products: @store.products}
  end
  
  
  
  
  
  
  
  
  
  private
  def set_store
    @store = Store.find(params[:store_id])
  end
    def set_product
    @product = @store.products.find(params[:id])
  end
end
