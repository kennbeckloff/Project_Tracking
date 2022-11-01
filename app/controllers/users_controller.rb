class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create


    def index
      render json: User.all, status: :ok
    end
  

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
      render json: @current_user
    end

    def update
      user = User.find(params[:id])
      if user
        user.update(user_params)
        render json: user
      else 
        render json: {error: "Project not found"}, status: :not_found
      end 
    end 
    private
  
    def user_params
      params.permit(:first_name, :email, :password, :password_confirmation,:role, :cohort_id, :last_name)
    end
end