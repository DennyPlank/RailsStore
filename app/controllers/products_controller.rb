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
    render component: "productNew", props: { product: @product, products: @store.products, store: @store }
  end

  def create
    puts 'create hit'
    product = @store.products.new(params.require(:product).permit(:name))
    if product.save
      redirect_to store_products_path
    else 
      puts "errors in prodcut_create controller"
    end
  end

  def edit
    render component: 'ProductEdit', props: { product: @product, products: @store.products, store: @store }
  end


  def update
    @product.update(params.require(:store).permit(:name))
    redirect_to store_products_path
  end

  def destroy
    @product.destroy
    redirect_to store_products_path
  end


  private
  def set_store
    @store = Store.find(params[:store_id])
  end
    def set_product
    @product = @store.products.find(params[:id])
  end
end
