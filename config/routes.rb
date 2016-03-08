Rails.application.routes.draw do
    root to: 'static#main'

    resources :users, only: [:new, :create, :show]

    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    namespace :api do
      namespace :v1 do
        resources :links, only: [:index, :create, :update, :destroy], defaults: { format: 'json' }
    end
  end

  resources :users
  resources :links
end
