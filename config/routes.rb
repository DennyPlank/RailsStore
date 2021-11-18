Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/', to: 'stores#home'
  
  get '/stores', to: 'stores#index'

  get '/newStore', to: 'stores#new'
  
  get '/store', to: 'stores#show'
  post '/stores/:id', to: 'stores#create'
  
  get '/store/:id', to: 'stores#edit'
  put '/stores/:id', to: 'stores#update'


  
  delete '/stores/:id', to: 'stores#destroy'

end
