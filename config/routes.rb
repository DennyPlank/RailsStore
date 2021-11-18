Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/', to: 'stores#home'
  
  get '/stores', to: 'stores#index'

  get '/stores/:id', to: 'stores#show'
 
  get '/stores/new', to: 'stores#new'
  post '/stores', to: 'stores#create'
   
  get '/stores/:id/edit', to: 'stores#edit'
  put '/stores/:id', to: 'stores#update'
  
  delete '/stores/:id', to: 'stores#destroy'

end
