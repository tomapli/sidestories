CREATE TABLE public.tasks (id uuid DEFAULT gen_random_uuid() NOT NULL, game_id uuid NOT NULL, title character varying(256) NOT NULL, description text, created_at timestamp without time zone DEFAULT now() NOT NULL, updated_at timestamp with time zone);
ALTER TABLE public.tasks ADD CONSTRAINT tasks_game_id_games_id_fk FOREIGN KEY (game_id) REFERENCES public.games(id) ON DELETE CASCADE;
ALTER TABLE public.tasks ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);
GRANT MAINTAIN, REFERENCES, TRIGGER, TRUNCATE ON public.tasks TO anon;
GRANT MAINTAIN, REFERENCES, TRIGGER, TRUNCATE ON public.tasks TO authenticated;
GRANT MAINTAIN, REFERENCES, TRIGGER, TRUNCATE ON public.tasks TO service_role;
