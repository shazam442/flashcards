class CreateFlashcards < ActiveRecord::Migration[7.2]
  def change
    create_table :flashcards do |t|
      t.string :title, null: false
      t.string :question, null: false
      t.text :solution, null: false

      t.timestamps
    end
  end
end
