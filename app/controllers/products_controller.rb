class ProductsController < ApplicationController
  before_action :set_store
  before_action :set_product, only: [:show, :update, :destroy, :edit]

  
  def index
    render component: "Products", props: { product: @product, products: @store.products, store: @store }
  end
  
  def show
    render component: "Product", props: { product: @product, products: @store.products, store: @store }
  end

  def new
    render component: "productNew", props: { store: @store}
  end
  
  def create
    render component: "productCreate", props: { product: @product, products: @store.products, store: @store}
  end

  def edit
  end


  def update
  end

  def destroy
  end


  private
  def set_store
    @store = Store.find(params[:store_id])
  end
    def set_product
    @product = @store.products.find(params[:id])
  end
end
