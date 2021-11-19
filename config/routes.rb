Rails.application.routes.draw do
  # get 'products/index'

  get '/', to: 'stores#home'
  
  # get '/stores', to: 'stores#index'
  # get '/stores/new', to: 'stores#new'

  # get '/stores/:id', to: 'stores#show'
 
  # post '/stores', to: 'stores#create'
   
  # get '/stores/:id/edit', to: 'stores#edit'
  # put '/stores/:id', to: 'stores#update'
  
  # delete '/stores/:id', to: 'stores#destroy'
  
  get '/react/demo', to: 'stores#react_demo'
  
  resources :stores do
    resources :products
  end
end
