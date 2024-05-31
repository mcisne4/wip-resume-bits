module default {
  type Skill {
    required _modified_date: cal::local_datetime;

    required skill: str {
      constraint min_len_value(2);
    }

    details: array<str>;
  }

  type IndexedSkill {
    required skill: Skill;

    required idx: int64 {
      constraint min_value(0);
    }
  }
}
