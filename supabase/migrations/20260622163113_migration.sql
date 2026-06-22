DROP POLICY "Users can read their own profile" ON public.users;
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
