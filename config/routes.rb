Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update, :destroy] do
      resources :posts, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :posts, only: [:create, :update, :index, :destroy]

    resources :likes, only: [:create, :destroy]

    resources :comments, only: [:create, :update, :destroy]

    resources :follow_requests, only: [:create, :update, :destroy]
    
  end

end
