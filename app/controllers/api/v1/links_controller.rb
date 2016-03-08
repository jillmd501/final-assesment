class Api::V1::LinksController < ApplicationController
  respond_to :json

  def index
    respond_with Link.all
  end

  def show
    respond_with Link.find(params[:id])
  end

  def update
    @link = Link.find(params["id"]).update(link_params)
    respond_with @link, json: @link
  end

private

  def link_params
    params.require(:link).permit(:url, :title, :read)
  end
end
