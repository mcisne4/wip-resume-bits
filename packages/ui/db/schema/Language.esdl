module default {
  type Language {
    required _modified_date: cal::local_datetime;

    required language: str {
      constraint min_len_value(2);
      constraint exclusive;
    }
  }

  type IndexedLanguage {
    required language: Language;

    required idx: int64 {
      constraint min_value(0);
    }
  }
}
