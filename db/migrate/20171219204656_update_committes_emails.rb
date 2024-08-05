# frozen_string_literal: true

class UpdateCommittesEmails < ActiveRecord::Migration[5.1]
  def change
    execute <<-SQL
      UPDATE teams set email = 'integrity@worldcubeassociation.org' where friendly_id = 'wic';
    SQL

    execute <<-SQL
      UPDATE teams set email = 'regulations@worldcubeassociation.org' where friendly_id = 'wrc';
    SQL
  end
end
