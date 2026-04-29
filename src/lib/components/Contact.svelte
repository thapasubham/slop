<section id="contact" class="max-w-6xl mx-auto px-8 py-24">
    <!-- Section Header -->
    <div class="mb-24 flex items-start gap-8">
        <div class="w-1 bg-primary h-24"></div>
        <div>
            <span class="font-headline text-xs font-bold tracking-[0.3em] text-primary block mb-2">COMM_PROTOCOL // 004</span>
            <h1 class="font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter text-on-surface leading-none">
                Establish<br/>Connection
            </h1>
        </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-12 gap-16">
        <!-- Contact Info Panel -->
        <div class="md:col-span-4 space-y-16">
            <section>
                <h3 class="font-headline text-xs font-black tracking-widest text-primary mb-6">NEURAL_LINKS</h3>
                <ul class="space-y-4 font-headline text-sm font-bold tracking-widest uppercase">
                    <li class="flex justify-between items-center group cursor-pointer border-b border-outline-variant/20 pb-2">
                        <a href="mailto:subhamits4.2@gmail.com" class="group-hover:text-primary transition-colors flex-1">EMAIL: subhamits4.2</a>
                        <svg class="h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </li>
                    <li class="flex justify-between items-center group cursor-pointer border-b border-outline-variant/20 pb-2">
                        <a href="tel:+9779818997475" class="group-hover:text-primary transition-colors flex-1">COMM: +977-9818997475</a>
                        <svg class="h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </li>
                    <li class="flex justify-between items-center group cursor-pointer border-b border-outline-variant/20 pb-2">
                        <a href="https://github.com/thapasubham" target="_blank" rel="noreferrer" class="group-hover:text-primary transition-colors flex-1">GITHUB: THAPASUBHAM</a>
                        <svg class="h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </li>
                </ul>
            </section>
        </div>
        
        <!-- Form Panel -->
        <div class="md:col-span-8">
            <form class="space-y-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <!-- Name Input -->
                    <div class="relative group">
                        <label for="subject_name" class="absolute -top-6 left-0 font-headline text-[10px] font-black tracking-widest text-primary">SUBJECT_NAME</label>
                        <input id="subject_name" class="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-primary px-4 py-4 font-headline text-sm tracking-widest placeholder:opacity-30 transition-all outline-none" placeholder="ENTER IDENTIFIER" type="text"/>
                        <div class="absolute top-0 right-0 w-2 h-2 bg-primary/20"></div>
                    </div>
                    <!-- Email Input -->
                    <div class="relative group">
                        <label for="return_address" class="absolute -top-6 left-0 font-headline text-[10px] font-black tracking-widest text-primary">RETURN_ADDRESS</label>
                        <input id="return_address" class="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-primary px-4 py-4 font-headline text-sm tracking-widest placeholder:opacity-30 transition-all outline-none" placeholder="NODE@NETWORK.COM" type="email"/>
                        <div class="absolute top-0 right-0 w-2 h-2 bg-primary/20"></div>
                    </div>
                </div>
                
                <!-- Message -->
                <div class="relative group">
                    <label for="data_payload" class="absolute -top-6 left-0 font-headline text-[10px] font-black tracking-widest text-primary">DATA_PAYLOAD</label>
                    <textarea id="data_payload" class="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-primary px-4 py-4 font-headline text-sm tracking-widest placeholder:opacity-30 transition-all resize-none outline-none" placeholder="DECRYPT YOUR MESSAGE HERE..." rows="6"></textarea>
                    <div class="absolute top-0 right-0 w-4 h-4 bg-primary/10"></div>
                    <div class="absolute bottom-2 right-2 font-headline text-[8px] opacity-30">ENCRYPTION: AES-256</div>
                </div>
                
                <!-- Submit Button -->
                <div class="pt-8">
                    <button class="group relative w-full h-24 bg-primary text-white overflow-hidden clip-path-button flex items-center justify-center gap-6 transition-transform active:scale-[0.98]" type="submit">
                        <span class="font-headline text-3xl font-black tracking-tighter uppercase">Initiate Transmission</span>
                        <svg class="h-8 w-8 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        
                        <!-- Decorative elements inside button -->
                        <div class="absolute top-2 left-4 text-[8px] font-headline tracking-[0.5em] opacity-50">SYNCING_CORE...</div>
                        <div class="absolute bottom-2 right-12 text-[8px] font-headline tracking-[0.5em] opacity-50">READY_FOR_UPLOAD</div>
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>
