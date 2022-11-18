class MoviesController < ApplicationController
  before_action :find_movie, only: [:show, :update, :destroy]

  def index
    @movies = Movie.all
    render json: @movies
  end

  def show
    if @movie
      render json: @movie
    else
      status_bad_request
    end
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: @movie, status: :created
    else
      status_unprocessable_entity
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      status_unprocessable_entity
    end
  end

  def destroy
    if @movie
      @movie.destroy
      render json: @movie
    else
      status_bad_request
    end
  end

  private
    def find_movie
      @movie = Movie.find_by_id(params[:id])
    end

    def status_unprocessable_entity
      render json: { errors: @movie.errors.full_messages }, status: :unprocessable_entity
    end

    def status_bad_request
      render json: { errors: ["Movie Doesn't Exist"] }, status: :bad_request
    end

    def movie_params
      params.require(:movie).permit(:title, :release_date, :description, :genre)
    end
end
